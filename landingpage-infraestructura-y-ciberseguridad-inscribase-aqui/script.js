const $btnContainerWebform = document.querySelector('.btn-webform'),
      $btnContainerWebformUp = document.querySelector('.btn-webform-up'),
      $btnContainerCta = document.querySelector('.btn-cta'),
      $containerCta = document.querySelector('.container-cta'),
      $containerCta2 = document.querySelector('.container-cta2'),
      $containerWebform = document.querySelector('.container-webform');

document.addEventListener('click', e => {
    if (e.target === $btnContainerCta || e.target === $btnContainerWebform){
        $containerCta.classList.toggle('active');
        $containerWebform.classList.toggle('active')
    } else {
        if (e.target === $btnContainerWebformUp){
            $containerWebform.classList.toggle('active');
            $containerCta2.classList.toggle('active')
        }
    }
});

new Pageable("#container-col");
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2);
AOS.init();

//countDown

const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays
}
};

const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `<div>
        <h6>${t.remainDays}</h6>
        <span>Días</span>
    </div>
    <div>
        <h6>${t.remainHours}</h6>
        <span>Horas</span>
    </div>
    <div>
        <h6>${t.remainMinutes}</h6>
        <span>Minutos</span>
    </div>
    <div>
        <h6>${t.remainSeconds}</h6>
        <span>Segundos</span>
    </div>`;

        if(t.remainTime <= 1){
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000)
};

countdown('Mar 02 2023 07:30:00 GMT-0500', 'clock', '¡Bienvenido!');
countdown('Mar 02 2023 07:30:00 GMT-0500', 'launch-time', '¡Bienvenido!');

//Send Google Sheets from Form

function SendFormGoogleSheets() {
    var nombre=document.getElementById('entry.1562361540').value;
    var celular=document.getElementById('entry.1935066067').value;
    var email=document.getElementById('entry.1520008568').value;
    var empresa=document.getElementById('entry.1454788060').value;
    var cargo=document.getElementById('entry.1337371359').value;

    if(nombre==""){
        Swal.fire({
                text: 'El nombre es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center',
            });
    document.elementById("entry.1562361540").focus();
    }
    if(celular==""){
        Swal.fire({
                text: 'El número del celular es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center',
            });
    document.elementById("entry.1935066067").focus();
    }
    if(email==""){
        Swal.fire({
                text: 'El correo electrónico es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center',
            });
    document.elementById("entry.1520008568").focus();
    }
    if(empresa==""){
        Swal.fire({
                text: 'El nombre de la empresa es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center',
            });
    document.elementById("entry.1454788060").focus();
    }
    if(cargo==""){
        Swal.fire({
                text: 'El cargo es obligatorio digitarlo',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                backdrop: true,
                timer: 3000,
                toast: 'true',
                position: 'center',
            });
    document.elementById("entry.1337371359").focus();
    }
}

function submitUserForm() {
    var webform = document.getElementById('mG61Hd');
    console.log(webform.submit());
}
