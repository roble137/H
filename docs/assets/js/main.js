"use strict";const inputName=document.querySelector(".form__field-name"),inputJob=document.querySelector(".form__field-job"),inputPhone=document.querySelector(".form__field-phone"),inputEmail=document.querySelector(".form__field-mail"),inputLinkedIn=document.querySelector(".form__field-linkedin"),inputGitHub=document.querySelector(".form__field-github"),previewName=document.querySelector(".preview-card__name"),previewJob=document.querySelector(".preview-card__career"),previewPhone=document.querySelector(".phone__link"),previewEmail=document.querySelector(".email__link"),previewLinkedIn=document.querySelector(".linkedin__link"),previewGitHub=document.querySelector(".github__link");function onNameInput(e){e.currentTarget.value?previewName.innerHTML=e.currentTarget.value:previewName.innerHTML="Nombre Apellidos"}function onJobInput(e){e.currentTarget.value?previewJob.innerHTML=e.currentTarget.value:previewJob.innerHTML="Front-end developer"}function onPhoneInput(){event.currentTarget.value?previewPhone.parentElement.classList.remove("hidden"):previewPhone.parentElement.classList.add("hidden"),previewPhone.href=`tel:${inputPhone.value}`}function onEmailInput(){event.currentTarget.value?previewEmail.parentElement.classList.remove("hidden"):previewEmail.parentElement.classList.add("hidden"),previewEmail.href=`mailto:${inputEmail.value}`}function onLinkedInInput(){event.currentTarget.value?previewLinkedIn.parentElement.classList.remove("hidden"):previewLinkedIn.parentElement.classList.add("hidden"),previewLinkedIn.href=`//${inputLinkedIn.value}`}function onGitHubInput(){let e=inputGitHub.value;"@"===e[0]&&(e=e.substring(1)),event.currentTarget.value?previewGitHub.parentElement.classList.remove("hidden"):previewGitHub.parentElement.classList.add("hidden"),previewGitHub.href=`//github.com/${e}`}inputName.addEventListener("keyup",onNameInput),inputJob.addEventListener("keyup",onJobInput),inputPhone.addEventListener("keyup",onPhoneInput),inputEmail.addEventListener("keyup",onEmailInput),inputLinkedIn.addEventListener("keyup",onLinkedInInput),inputGitHub.addEventListener("keyup",onGitHubInput);const inputRadio1=document.querySelector(".js__radio1"),inputRadio2=document.querySelector(".js__radio2"),inputRadio3=document.querySelector(".js__radio3"),previewCard=document.querySelector(".js__preview-card");function changeColor(e){previewCard.classList.remove("preview-card-red"),previewCard.classList.remove("preview-card-green"),previewCard.classList.remove("preview-card-yellow"),previewCard.classList.add(e.currentTarget.value)}inputRadio1.addEventListener("click",changeColor),inputRadio2.addEventListener("click",changeColor),inputRadio3.addEventListener("click",changeColor);const form=document.querySelector("form");function rotateIconFromHeader(e){e.querySelector(".fa-chevron-down").classList.toggle("collapsable--rotate")}function openCollapsable(e){rotateIconFromHeader(e),e.nextElementSibling.classList.toggle("collapsable--visible")}function closeCollapsable(e){rotateIconFromHeader(e.previousElementSibling),e.classList.remove("collapsable--visible")}const onFormClick=e=>{const n=e.target.closest(".collapsable__header"),t=form.querySelectorAll(".collapsable--visible");if(n){const e=n.nextElementSibling;if(t.length)for(let n=0;n<t.length;n++)t[n]!==e&&closeCollapsable(t[n]);openCollapsable(n)}};form.addEventListener("click",onFormClick);