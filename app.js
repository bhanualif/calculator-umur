document.getElementById('ageForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const day = parseInt(document.getElementById('day').value, 10);
  const month = parseInt(document.getElementById('month').value, 10);
  const year = parseInt(document.getElementById('year').value, 10);

  if (!day || !month || !year) {
    document.getElementById('ageResult').innerHTML =
      `<span class="highlight">--</span> years<br>` +
      `<span class="highlight">--</span> months<br>` +
      `<span class="highlight">--</span> days`;
    return;
  }

  const today = new Date();
  let ageYear = today.getFullYear() - year;
  let ageMonth = today.getMonth() + 1 - month;
  let ageDay = today.getDate() - day;

  if (ageDay < 0) {
    ageMonth--;
    ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (ageMonth < 0) {
    ageYear--;
    ageMonth += 12;
  }

  document.getElementById('ageResult').innerHTML =
    `<span class="highlight">${ageYear}</span> years<br>` +
    `<span class="highlight">${ageMonth}</span> months<br>` +
    `<span class="highlight">${ageDay}</span> days`;
});