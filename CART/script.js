 function toggleTheme() {
          var root = document.querySelector("");
          
          if (root.style.getPropertyValue('--background-color') === 'rgb(34, 34, 34)'){
              root.style.setProperty('--background-color', '#fff');
              root.style.setProperty('--text-color', 'black');
          } else {
              root.style.setProperty('--background-color', '#222');
              root.style.setProperty('--text-color', 'white');
          }
      }