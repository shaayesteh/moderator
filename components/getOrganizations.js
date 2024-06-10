import { ORGANIZATIONS_LIST } from "../queries/organizations.query.mjs";
import { gql } from "../services/index.js";

function getOrganizations() {
  return gql({ query: ORGANIZATIONS_LIST }).then(
    (data) => data.data.organizations
  );
}

function printOrganizations(organizations) {
  const template = document.getElementById("organizations-template").content;
  const tbody = template.querySelector("tbody");
  tbody.innerHTML = "";

  organizations.forEach((org) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = org.id;
    row.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = org.name;
    row.appendChild(nameCell);

    const createdAtCell = document.createElement("td");
    createdAtCell.textContent = new Date(org.created_at).toLocaleString();
    row.appendChild(createdAtCell);

    tbody.appendChild(row);
  });

  const mainElement = document.getElementById("main");
  mainElement.innerHTML = "";
  mainElement.appendChild(document.importNode(template, true));
}

document.getElementById("og").addEventListener("click", () => {
  getOrganizations().then((organizations) => {
    printOrganizations(organizations);
  });
});
