/*
* Function that handles showing and closing a modal window with a nested PDF.
* The modal window is a bit small, but still allows for a viewable PDF without simply nesting it directly in the body.
*/
(function(a){a.createModal=function(b){defaults={title:"",message:"",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 520px;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog">';html+='<div class="modal-content">';html+='<div class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

/*
* Configurables
*/
$(function(){    
    $('.view-pdf').on('click',function(){
        var pdf_link = $(this).attr('href');
        var iframe = '<object type="application/pdf" data="'+pdf_link+'" width="100%" height="500">No Support</object>'
        $.createModal({
            title:'My Résumé',
            message: iframe,
            closeButton:true,
            scrollable:false
        });
        return false;        
    });    
})