function ready ()
{
var inputs = document.querySelectorAll('.form_file');
Array.prototype.forEach.call( inputs, function( input )
{
    var label = input.nextElementSibiling,
    labelVal = label.innerHTML;
    input.addEventListener ('change', function( e )
    {
        console.log(this.files);
        var fileName = '';
        if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '').replace( '{count}', this.files.length);
        else 
        // fileName = this.files[0].name;
        fileName = e.target.value.split( '\\').pop();
                
        if( fileName )
        label.querySelectorAll( 'span' ).innerHTML = fileName;
        else
        label.innerHTML = labelVal;
    });
});
    };

    document.addEventListener("DOMContentLoaded", ready);