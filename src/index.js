import { h1, p, section } from "./elements/elements";
import "./styles.css";
import {
  renderFeaturedDishesCard,
  renderMenu,
  renderAbout,
} from "./elements/components";
import { restaurantData } from "./content";

const renderHome = (content) => {
  const page = document.getElementById("content");
  const about = section("content__about");
  const heading = h1(content.homePage.name, "homePage", 16);
  const tagline = p(content.homePage.tagline, "homePage", 12);
  const featuredDishes = renderFeaturedDishesCard(
    content.homePage.featuredDishes
  );
  const menu = renderMenu(content.menuPage);
  about.append(heading);
  about.append(tagline);
  page.append(about);
  page.append(featuredDishes);
  page.append(menu);
};

// renderHome(restaurantData);

const renderMenuPage = (content) => {
  const page = document.getElementById("content");
  const menu = renderMenu(content.menuPage);
  page.append(menu);
};

const renderAboutPage = (content) => {
  const page = document.getElementById("content");

  const about = renderAbout(content.aboutPage);
  page.append(about);
};

const router = () => {
  const buttons = document.querySelectorAll(".header-nav__nav-button");
  const page = document.getElementById("content");

  Array.from(buttons).map((e) =>
    e.addEventListener("click", (e) => {
      page.innerText = " ";

      console.log(e.target.getAttribute("data-page"));
      if (e.target.getAttribute("data-page") == "home") {
        renderHome(restaurantData);
      } else if (e.target.getAttribute("data-page") == "menu") {
        renderMenuPage(restaurantData);
      } else if (e.target.getAttribute("data-page") == "about") {
        renderAboutPage(restaurantData);
      }
    })
  );
};

renderHome(restaurantData);
router();
