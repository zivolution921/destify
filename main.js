 $(function () {
            $('#datetimepicker12').datetimepicker({
                inline: true,
                sideBySide: true
            });
        });

 $('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

 $('#myTabs a[href="#Interests"]').tab('show') // Select tab by name
$('#myTabs a:Dating').tab('show') // Select first tab
$('#myTabs a:School').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)