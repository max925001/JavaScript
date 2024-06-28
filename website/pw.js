var $grid = $(".grid").isotope({
    itemSelector: ".item",
    percentPosition: true,
    layoutMode: "fitRows",
  });

  $(".filters ul li").click(function () {
    $(".filters ul li").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });

  const grid =document.querySelector('.webd')
  const web =document.querySelector('.web')
  console.log(web)

  console.log(grid)
  const python =document.querySelector('.pythond')
  console.log(python)
  python.addEventListener('click',function(e){
web.style.display='none'

  })