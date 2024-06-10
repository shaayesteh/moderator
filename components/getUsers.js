import { USERS_LIST } from "../queries/users.query.mjs";
import { gql } from "../services/index.js";

function getUsers() {
  return gql({ query: USERS_LIST }).then((data) => data.data.users);
}

function printUsers(users) {
  const template = document.getElementById("users-template").content;
  const tbody = template.querySelector("tbody");
  tbody.innerHTML = "";

  users.forEach((user) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = user.id;
    row.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = `${user.first_name} ${
      user.last_name ? user.last_name : ""
    }`;
    row.appendChild(nameCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    const mobileCell = document.createElement("td");
    mobileCell.textContent = user.mobile;
    row.appendChild(mobileCell);

    const organizationCell = document.createElement("td");
    organizationCell.textContent = user.organization?.name;
    row.appendChild(organizationCell);

    const createdAtCell = document.createElement("td");
    createdAtCell.textContent = new Date(user.created_at).toLocaleString();
    row.appendChild(createdAtCell);

    const isActiveCell = document.createElement("td");
    isActiveCell.textContent = user.is_active;
    row.appendChild(isActiveCell);

    tbody.appendChild(row);
  });

  const mainElement = document.getElementById("main");
  mainElement.innerHTML = "";
  mainElement.appendChild(document.importNode(template, true));
}

document.getElementById("users").addEventListener("click", () => {
  getUsers().then((users) => {
    printUsers(users);
  });
});
