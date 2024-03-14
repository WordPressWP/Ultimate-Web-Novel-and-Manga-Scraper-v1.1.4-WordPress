<?php

namespace Railken\Mangafox;

use Railken\Mangafox\Exceptions as Exceptions;

class MangafoxResourceRequest
{
    /*
     * @var Mangafox
     */
    protected $manager;

    /**
     * Constructor.
     *
     * @param Mangafox $manager
     */
    public function __construct(Mangafox $manager)
    {
        $this->manager = $manager;
    }

    /**
     * Send the request for the research.
     *
     * @param MangafoxResourceBuilder $builder
     *
     * @return MangafoxResourceBuilder
     */
    public function send(MangafoxResourceBuilder $builder)
    {
        $results = $this->manager->request('GET', "/manga/{$builder->getUid()}", []);
        if($results === false)
        {
            throw new Exceptions\MangafoxResourceRequestNotFoundException('Failed to download ' . $builder->getUid());
        }
        $parser = new MangafoxResourceParser($this->manager);

        try {
            return $parser->parse($results);
        } catch (Exceptions\MangafoxResourceParserInvalidUrlException $e) {
            throw new Exceptions\MangafoxResourceRequestNotFoundException($builder->getUid());
        }
    }
}
