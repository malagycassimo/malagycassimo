$(function () {
	$('.titulo').click(function(){

     var conteudo = $(this).parent().find('.conteudo');

     if (!conteudo.hasclass('show')) {

     	$('.caixa').find('.show').slideup('fast', function(){
          $(this).addclass('hide').removeclass('show');

           })

          conteudo.slidedown('fast',function(){
          $(this).addclass('show').removeclass('hide');
           })	
       
       }

	})
})