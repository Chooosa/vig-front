const template = `
<div class="ymap-point">
  <div class="search-placemark-icons__active">
    <svg height="64px" width="64px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 498.923 498.923" fill="#000000">
        <path fill="currentColor" d="M249.462,0C151.018,0,70.951,80.106,70.951,178.511c0,92.436,133.617,192.453,172.248,315.948 c0.83,2.667,3.322,4.484,6.116,4.465c2.804-0.039,5.256-1.876,6.048-4.563c37.478-126.533,172.6-223.307,172.609-315.869 C427.963,80.106,347.886,0,249.462,0z M249.462,313.925c-77.184,0-139.987-62.812-139.987-139.987 c0-77.184,62.803-139.987,139.987-139.987c77.165,0,139.977,62.803,139.977,139.987 C389.439,251.113,326.626,313.925,249.462,313.925z"></path>
    </svg>
  </div>
  <div style="position: absolute;left: 30px;top: 28px;">
    <div class="rubric-placemark-icons-provider__active-content">
      <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M3.11719 31.9991C3.11719 47.952 16.0496 60.8844 32.0025 60.8844C47.9442 60.8573 60.8607 47.9408 60.8879 31.9991C60.8879 16.0462 47.9554 3.11377 32.0025 3.11377C16.0496 3.11377 3.11719 16.0462 3.11719 31.9991ZM10.5114 23.1131C14.1075 14.4203 22.5876 8.75119 31.9949 8.75117V8.76526C44.8131 8.76523 55.213 19.1399 55.244 31.9581C55.2611 41.3653 49.6075 49.8558 40.9213 53.4676C32.235 57.0795 22.2282 55.1008 15.5702 48.4549C8.91224 41.8091 6.91538 31.8059 10.5114 23.1131Z" fill="#FFF" fill-rule="evenodd" />
        <path d="M28.6976 23.5449H19.6445V17.0703H44.2393V23.5449H35.2074V46.794H28.6976V23.5449Z" fill="#FFF" />
      </svg>
    </div>
  </div>

  <div class="ymap-balloon">
    <div class="search-placemark-title">
      <div class="search-placemark-title__title"><b>ВИГ</b></div>
      <div class="search-placemark-title__subtitle">
        <span class="search-placemark-title__subtitle-item">До 19:00</span>
        <span class="search-placemark-title__subtitle-item">
          <span class="search-placemark-title__subtitle-item-rating-image" style="font-size: 0px; line-height: 0;">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
              <path fill="#666" d="M3.992 6.566l1.818.948c.485.253.952-.083.86-.62l-.347-2.008c.003.02.01.002-.006.016L7.79 3.48c.392-.38.213-.925-.33-1.003L5.43 2.183c.02.003.005-.008.013.01L4.53.365c-.24-.487-.82-.487-1.06 0l-.91 1.828c.01-.018-.007-.007.013-.01L.54 2.477c-.542.078-.72.623-.33 1.002L1.684 4.9c-.015-.014-.01.004-.005-.016l-.348 2.01c-.092.534.375.87.86.62l1.818-.95c-.017.01.002.01-.016 0z"></path>
            </svg>
          </span>
          <span class="search-placemark-title__subtitle-item-rating">4.8</span>
        </span>
      </div>
    </div>
  </div>
</div>
`;


function mapPointLayoutFactory(ymaps) {
  return ymaps.templateLayoutFactory.createClass(template, {
    build() {
      this.constructor.superclass.build.call(this);

      const { options } = this.getData();

      options.set('shape', { type: 'Circle', coordinates: [0, 0], radius: 68 });
    },
  });
}

export default mapPointLayoutFactory;
