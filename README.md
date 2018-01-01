Running the app locally

git clone https://github.com/Priyank-Ahuja/HPDF_Task1_PriyankAhuja
cd HPDF_Task1_PriyankAhuja

npm install

npm start

It will render the SearchPage by default.
to render the HomePage go to index.js and instead of <SearchPage /> render <HomePage /> 

from: 
ReactDOM.render(<SearchPage />, document.getElementById('root'));

to:
ReactDOM.render(<HomePage />, document.getElementById('root'));
