export const h1 = (content, elementClass) => {
  const h1 = document.createElement("h1");
  h1.setAttribute("class", `${elementClass} heading`);

  h1.innerText = content;
  return h1;
};

export const p = (content, elementClass) => {
  const p = document.createElement("p");
  p.setAttribute("class", `${elementClass} paragraph`);

  p.innerText = content;
  return p;
};

export const container = (elementClass) => {
  const container = document.createElement("div");
  container.setAttribute("class", `${elementClass} container`);
  return container;
};

export const section = (elementClass) => {
  const section = document.createElement("section");
  section.setAttribute("class", `${elementClass} section`);
  return section;
};

export const ul = (elementClass) => {
  const ul = document.createElement("ul");
  ul.setAttribute("class", `${elementClass} list`);

  return ul;
};

export const li = (elementClass) => {
  const li = document.createElement("li");
  li.setAttribute("class", `${elementClass} list-item`);

  return li;
};
