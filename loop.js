<script>

  for(i = 0 ; i<5; i++){
    var colorCode = "#" + Math.round(Math.random() * 0xffffff).toString();
    var x = document.getElementsByClassName("");
    x[i].style.backgroundColor = colorCode;
  }

</script>
