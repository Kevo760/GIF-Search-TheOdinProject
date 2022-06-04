import { createHeader } from "./header";
import { createContentSection } from "./contentSection";
import { siteBtnFunctions } from "./siteFunctions";
import './style.css';

function createWebsite() {
createHeader('GIF Searcher Lite');
createContentSection();
siteBtnFunctions();

};


export {createWebsite};