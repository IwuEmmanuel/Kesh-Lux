window.onscroll = () => {
        if (window.pageYOffset > 50){
          document.getElementById("top-header1").classList.add('top-header-white-background');
        }else{
          document.getElementById("top-header1").classList.remove('top-header-white-background');
        }
      };