const phone = document.getElementById("phone");
const passWrap = document.getElementById("passWrap");
const actionBtn = document.getElementById("actionBtn");

const newPass = document.getElementById("newPass");
const confirmPass = document.getElementById("confirmPass");

function cleanPhone(v){
  return (v || "").replace(/\s|-/g, "");
}

function isValidBDPhone(v){
  const p = cleanPhone(v);
  return /^(?:\+?88)?01\d{9}$/.test(p);
}

passWrap.hidden = true;
actionBtn.disabled = true;

phone.addEventListener("input", () => {
  if(isValidBDPhone(phone.value)){
    passWrap.hidden = false;
  }else{
    passWrap.hidden = true;
    newPass.value = "";
    confirmPass.value = "";
  }
});

actionBtn.addEventListener("click", () => {
  window.location.href = "signin.html";
});

[newPass, confirmPass].forEach(input => {
  input.addEventListener("input", () => {
    actionBtn.disabled = !(newPass.value && confirmPass.value);
  });
});
