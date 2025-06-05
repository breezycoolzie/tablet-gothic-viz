const dscc = require('@google/dscc');

function drawViz(data) {
  const container = document.getElementById("viz");
  const value = data.tables.DEFAULT[0]?.dimensions[0]?.value || "No data";
  
  container.innerHTML = `
    <div class="tablet-gothic-text">
      ${value}
    </div>
  `;
}

dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });
