export const navLinkActions = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');
  const sectionList = document.querySelectorAll('.section');
  const header = document.querySelector('.header');

  const headerHeight = header.clientHeight;
  window.scrollY > headerHeight
    ? header.classList.add('bg-visible')
    : header.classList.remove('bg-visible');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
      event.preventDefault();
      const clickedAnchorName = event.target.hash.slice(1);
      let scrollPosition = 0;
      sectionList.forEach(item => {
        if (item.id === clickedAnchorName) {
          scrollPosition = item.offsetTop;
        }
      });
      window.scrollTo({
        top: scrollPosition - headerHeight,
        behavior: 'smooth',
      });
    });
  });

  window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    let currentSectionId = '';
    scrollDistance > headerHeight
      ? header.classList.add('bg-visible')
      : header.classList.remove('bg-visible');

    sectionList.forEach(item => {
      if (item.offsetTop - headerHeight - 10 <= scrollDistance) {
        currentSectionId = item.getAttribute('id');
        anchors.forEach(item => {
          if (item.classList.contains('nav__link_current')) {
            item.classList.remove('nav__link_current');
          }
        });
      }
      const findingAnchor = document.querySelector(
        `a[href*="#${currentSectionId}"]`
      );
      if (findingAnchor) {
        findingAnchor.classList.add('nav__link_current');
      }
    });
  });
};
