window.addEventListener("load", function() {
  window.loadHiddenLinks = function() {
    var hiddenLinks = document.getElementsByClassName("veryhiddenlink");
    for(link of hiddenLinks) {
      link.addEventListener("click", function() {
        console.log(this.getAttribute('tvhl'));
        window.location.href = this.getAttribute('tvhl');
      });
    }
  };
});
