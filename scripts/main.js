const sections = document.querySelectorAll('.section');
      const viewportWidth =
        window.innerWidth || document.documentElement.clientWidth;

      const sectionAnimation = (i) => {
        if (i < 0) return;

        setTimeout(function() {
          sections[i].classList.add('uk-animation-slide-top');
          sections[i].classList.remove('hidden');
          sectionAnimation(--i);
        }, 300);
      }

      
      if (viewportWidth < 768) {
        sections.forEach(section => {
          section.classList.remove('hidden');
          section.classList.remove('uk-animation-slide-top');
        });
        document.querySelector('.navbar').classList.remove('uk-animation-slide-left');
      } else {
        sectionAnimation(sections.length - 1);
      }