import View from './View.js';
import previewView from './previewView.js'
import icons from 'url:../../img/icons.svg';


class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

 _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();





// _generateMarkupPreview(result) {
  //   return `
  //      <li class="preview">
  //           <a class="preview__link" href="#${result.id}">
  //             <figure class="preview__fig">
  //               <img src="${result.image}" alt="${result.title}" />
  //             </figure>
  //             <div class="preview__data">
  //               <h4 class="preview__title">${result.title}</h4>
  //               <p class="preview__publisher">${result.publisher}</p>
  //           </a>
  //         </li>
  //     `;
  // }