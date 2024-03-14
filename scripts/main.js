"use strict"; 
var initial = '';
    function mainChanged()
    {
        if(jQuery('.input-checkbox').is(":checked"))
        {            
            jQuery(".hideMain").show();
        }
        else
        {
            jQuery(".hideMain").hide();
        }
        if(jQuery("#spin_text option:selected").val() === 'best' || jQuery("#spin_text option:selected").val() === 'wordai' || jQuery("#spin_text option:selected").val() === 'spinrewriter') 
        {      
            jQuery(".hideBest").show();
        }
        else
        {
            jQuery(".hideBest").hide();
        }
if (mycustommainsettings.best_user == '' || mycustommainsettings.best_password == '')
{
        if(jQuery("#spin_text option:selected").val() === 'best') 
        {      
            jQuery("#bestspin").show();
        }
        else
        {
            jQuery("#bestspin").hide();
        }
        if(jQuery("#spin_text option:selected").val() === 'wordai') 
        {      
            jQuery("#wordai").show();
        }
        else
        {
            jQuery("#wordai").hide();
        }
        if(jQuery("#spin_text option:selected").val() === 'spinrewriter') 
        {      
            jQuery("#spinrewriter").show();
        }
        else
        {
            jQuery("#spinrewriter").hide();
        }
}
else
{
if(initial == '')
{
    initial = jQuery("#spin_text option:selected").val();
}
if(initial != '' && initial != jQuery("#spin_text option:selected").val())
{
        if(jQuery("#spin_text option:selected").val() === 'best') 
        {      
            jQuery("#bestspin").show();
        }
        else
        {
            jQuery("#bestspin").hide();
        }
        if(jQuery("#spin_text option:selected").val() === 'wordai') 
        {      
            jQuery("#wordai").show();
        }
        else
        {
            jQuery("#wordai").hide();
        }
        if(jQuery("#spin_text option:selected").val() === 'spinrewriter') 
        {      
            jQuery("#spinrewriter").show();
        }
        else
        {
            jQuery("#spinrewriter").hide();
        }
}
else
{
    jQuery("#spinrewriter").hide();
    jQuery("#wordai").hide();
    jQuery("#bestspin").hide();
}
}
        if(jQuery('#send_email').is(":checked"))
        {            
            jQuery(".hideMail").show();
        }
        else
        {
            jQuery(".hideMail").hide();
        }
        if(jQuery('#enable_logging').is(":checked"))
        {            
            jQuery(".hideLog").show();
        }
        else
        {
            jQuery(".hideLog").hide();
        }
        if(jQuery('#links_hide').is(":checked"))
        {            
            jQuery(".hideGoo").show();
        }
        else
        {
            jQuery(".hideGoo").hide();
        }
    }
    window.onload = mainChanged;
    jQuery(document).ready(function(){
					jQuery('span.wpums-delete').on('click', function(){
						var confirm_delete = confirm('Delete This Rule?');
						if (confirm_delete) {
							jQuery(this).parent().parent().remove();
							jQuery('#myForm').submit();						
						}
					});
				});
    var unsaved = false;
    jQuery(document).ready(function () {
        jQuery(":input").change(function(){
            if (this.id != 'PreventChromeAutocomplete')
                unsaved = true;
        });
        function unloadPage(){ 
            if(unsaved){
                return "You have unsaved changes on this page. Do you want to leave this page and discard your changes or stay on this page?";
            }
        }
        window.onbeforeunload = unloadPage;
    });

function revealRec(){document.getElementById("diviIdrec").innerHTML = '<br/>We recommend that you check <b><a href="https://www.elegantthemes.com/affiliates/idevaffiliate.php?id=50837_5_1_16" target="_blank">Divi theme</a></b>, by <b><a href="https://www.elegantthemes.com/affiliates/idevaffiliate.php?id=50837_1_1_3" target="_blank">ElegantThemes</a></b>! It is easy to configure and it looks gorgeous. Check it out now!<br/><br/><a href="https://www.elegantthemes.com/affiliates/idevaffiliate.php?id=50837_5_1_19" target="_blank" rel="nofollow"><img style="border:0px" src="https://3.bp.blogspot.com/-h9TLQozNO6Q/W92Sk80zwjI/AAAAAAAAAjg/JC8sFWAUPzseR4nnjhVNbRQmCnr1ZMu4gCLcBGAs/s1600/divi.jpg" width="468" height="60" alt="Divi WordPress Theme"></a>';}