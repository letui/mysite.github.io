var $blog={
total:1,
last:3,
size:9,
count:0
}
function initBlogList(){
for(i=$blog.last;i>0;i--){
				$blog.count++;
				if($blog.count>$blog.size)break;
				$.ajax({
					url:"blog/"+i+"/"+"text.html",async:false,
					success:function(html){
						var txArray=html.split("#");
						var tmpl=$(".item[tpl=blog]").html();
						var item=$(".item[tpl=blog]").clone();
						tmpl=tmpl.replace("#tpl_image",i+"/img.png?"+Math.random());
						tmpl=tmpl.replace("#tpl_title",txArray[0]);
						tmpl=tmpl.replace("#tpl_label",txArray[1]);
						tmpl=tmpl.replace("#tpl_summary",txArray[2].substr(0,140));
						item.removeAttr("tpl");
						item.html(tmpl);
						$("#tpl_blog_list").append(item);
					}
				});
			}
$(".item[tpl=blog]").remove();
}