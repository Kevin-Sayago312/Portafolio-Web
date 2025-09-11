// Lista de skills
  const skills = [
    { name: "HTML5", level: 100 },
    { name: "CSS3", level: 80 },
    { name: "JavaScript", level: 65 },
    { name: "MySQL", level: 87 },
    { name: "SQL Server", level: 80 },
    { name: "PHP", level: 85 },
    { name: "C# .NET", level: 60 },
    { name: "Python", level: 50 },
    { name: "Bootstrap", level: 85 },
    { name: "Laravel", level: 80 },
    { name: "Symfony", level: 90 },
    { name: "Tailwind", level: 45 },
    { name: "DataTable.JS", level: 35 },
    { name: "Livewire", level: 75 },
    { name: "JetStream", level: 35 },
    { name: "Excel", level: 55 },
    { name: "IA en el trabajo", level: 90 },
    { name: "GitHub", level: 75 },
    { name: "Capacidad de escucha", level: 100 },
    { name: "Trabajo en equipo", level: 100 },
    { name: "Puntualidad", level: 100 },
    { name: "Control al estrés", level: 100 },
    { name: "Liderazgo", level: 80 },
    { name: "Empatía", level: 100 },
    { name: "Resiliencia", level: 100 },
    { name: "Proactividad", level: 100 },
    { name: "Habilidad social", level: 90 },
    { name: "Responsabilidad", level: 100 },
    { name: "Adaptabilidad", level: 100 }
  ];

  // Configuración de paginación
  let currentPage = 1;
  const skillsPerPage = 6;

  function renderSkills() {
    const start = (currentPage - 1) * skillsPerPage;
    const end = start + skillsPerPage;
    const currentSkills = skills.slice(start, end);

    const container = document.getElementById("skills-container");
    container.innerHTML = "";

    currentSkills.forEach(skill => {
      const skillEl = document.createElement("div");
      skillEl.classList.add("col-md-6", "mb-4");
      skillEl.innerHTML = `
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <div class="d-flex justify-content-between mb-2">
              <h6 class="mb-0">${skill.name}</h6>
              <span class="fw-bold">${skill.level}%</span>
            </div>
            <div class="progress" style="height: 8px;">
              <div class="progress-bar bg-primary" role="progressbar" 
                   style="width: ${skill.level}%" 
                   aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      `;
      container.appendChild(skillEl);
    });

    renderPagination();
  }

  function renderPagination() {
  const totalPages = Math.ceil(skills.length / skillsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  // Botón anterior
  const prevItem = document.createElement("li");
  prevItem.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
  prevItem.innerHTML = `<a class="page-link" href="#">Anterior</a>`;
  prevItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault(); // 🚫 evita el scroll
    if (currentPage > 1) {
      currentPage--;
      renderSkills();
    }
  });
  pagination.appendChild(prevItem);

  // Números de páginas
  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    pageItem.className = `page-item ${i === currentPage ? "active" : ""}`;
    pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    pageItem.querySelector("a").addEventListener("click", (e) => {
      e.preventDefault(); // 🚫 evita el scroll
      currentPage = i;
      renderSkills();
    });
    pagination.appendChild(pageItem);
  }

  // Botón siguiente
  const nextItem = document.createElement("li");
  nextItem.className = `page-item ${currentPage === totalPages ? "disabled" : ""}`;
  nextItem.innerHTML = `<a class="page-link" href="#">Siguiente</a>`;
  nextItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault(); // 🚫 evita el scroll
    if (currentPage < totalPages) {
      currentPage++;
      renderSkills();
    }
  });
  pagination.appendChild(nextItem);
}
  // Render inicial
  renderSkills();




    // ========================= CERTIFICADOS =========================
  const certificados = [
    { titulo: "Certificado Cómputo Básico", fecha: "16 de Julio de 2025", institucion: "Capacítate para el empleo | Fundación Carlos Slim", enlace: "assets/img/Certificates/Certificado Computo Basico.pdf" },
    { titulo: "Certificado Prácticas de ofimática", fecha: "16 de Julio de 2025", institucion: "Capacítate para el empleo | Fundación Carlos Slim", enlace: "assets/img/Certificates/Certificado Practicas de Ofimatica.pdf" },
    { titulo: "Reconocimiento - Consejo Municipal Habilitado", fecha: "11 de Julio de 2025", institucion: "OPLE Veracruz", enlace: "assets/img/Certificates/Reconocimiento OPLE Habilitado.pdf" },
    { titulo: "Reconocimiento - Consejo Municipal", fecha: "11 de Julio de 2025", institucion: "OPLE Veracruz", enlace: "assets/img/Certificates/Reconocimiento OPLE Ayuntamientos.pdf" },
    { titulo: "Certificado Google IT Support", fecha: "27 de Julio de 2025", institucion: "Google | Coursera", enlace: "https://coursera.org/share/90d7f95bde33fbcb2c112079a878051f" },
    { titulo: "Certificado Introducción al comportamiento del consumidor", fecha: "14 de Febrero de 2025", institucion: "Santander OpenAcademy", enlace: "assets/img/Certificates/Certificado Introduccion al comportamiento del consumidor.pdf" },
    { titulo: "Certificado Fundamentos de ChatGPT", fecha: "14 de Febrero de 2025", institucion: "Santander OpenAcademy", enlace: "assets/img/Certificates/Certificado de Fundamentos de ChatGPT.pdf" },
    { titulo: "Certificado CSS Avanzado", fecha: "06 de Febrero de 2025", institucion: "DesafioLatam", enlace: "https://cursos.desafiolatam.com/certificates/kspsshepqe" },
    { titulo: "Insignia Web Development Fundamentals", fecha: "09 de Enero de 2025", institucion: "IBM SkillsBuild", enlace: "https://www.credly.com/badges/982507a3-008f-4740-be6f-ca2b2d48c523/public_url" },
    { titulo: "Insignia Information Technology Fundamentals", fecha: "19 de Diciembre de 2024", institucion: "IBM SkillsBuild", enlace: "https://www.credly.com/badges/c360842f-1a98-452c-8ecf-65d247ab44b8/public_url" },
    { titulo: "Certificado Ciberseguridad de Google", fecha: "15 de Diciembre de 2024", institucion: "Coursera | Google", enlace: "https://coursera.org/share/f8d5dec8877c6368f0329c2f9a28f6c9" },
    { titulo: "Certificado Python", fecha: "02 de Diciembre de 2024", institucion: "Santander OpenAcademy", enlace: "assets/img/Certificates/Certificado de Python.pdf" },
    { titulo: "Google Cloud Computing Foundations Certificate", fecha: "18 de Noviembre de 2024", institucion: "Google Cloud", enlace: "https://www.credly.com/badges/ac27a5a9-a99a-4152-8fb9-cbdc7e269928/public_url" },
    { titulo: "Certificado Fundamentos Profesionales en Ciberseguridad", fecha: "12 de Noviembre de 2024", institucion: "Microsoft | LinkedIn", enlace: "https://www.linkedin.com/learning/certificates/b3ab036b584bef8da72f495b05e19f3713013eecf7497af7b8534978e27761da?trk=share_certificate" },
    { titulo: "Certificado Panorámica de amenazas a la ciberseguridad", fecha: "11 de Noviembre de 2024", institucion: "Microsoft | LinkedIn", enlace: "https://www.linkedin.com/learning/certificates/5dbe12b5098bc29ac3b5af4a8f1497bc257724539bb73f3da0f330c824d4babd?trk=share_certificate" },
    { titulo: "Certificado Fundamentos de ciberseguridad", fecha: "10 de Noviembre de 2024", institucion: "Microsoft | LinkedIn", enlace: "https://www.linkedin.com/learning/certificates/80b4e4ee4738dda90d84f50f989e2613faa8f8b19ec2474fc0f025b24a699f4d?trk=share_certificate" },
    { titulo: "Certificado Concienciación en ciberseguridad: Terminología de ciberseguridad", fecha: "10 de Noviembre de 2024", institucion: "Microsoft | LinkedIn", enlace: "https://www.linkedin.com/learning/certificates/053a0871b99a950ad8ae4a17ee59fb03978dfe4b90f3cfd19cdf1c4c5f1be7d7?trk=share_certificate" },
    { titulo: "Insignia Introduction to Cybersecurity", fecha: "07 de Noviembre de 2024", institucion: "Cisco Academy", enlace: "https://www.credly.com/badges/58a0fc69-2d5e-48b0-8174-846a0117ca59/public_url" },
    { titulo: "Certificado Internet de las Cosas", fecha: "16 de Septiembre de 2024", institucion: "Santander OpenAcademy", enlace: "assets/img/Certificates/Certificado de Internet de las Cosas.pdf" },
    { titulo: "Certificado Excel", fecha: "16 de Septiembre de 2024", institucion: "Santander OpenAcademy", enlace: "assets/img/Certificates/Certificado de Excel.pdf" },
    { titulo: "Certificado Introducción a la Ciencia de Datos", fecha: "06 de Septiembre de 2024", institucion: "Santander OpenAcademy | IE University", enlace: "assets/img/Certificates/Certificado de Introduccion a la ciencia de datos.pdf" },
    { titulo: "Certificado E-commerce y gestión comercial", fecha: "04 de Septiembre de 2024", institucion: "Santander OpenAcademy | IE University", enlace: "assets/img/Certificates/Certificado de E-commerce y gestion comercial.pdf" },
    { titulo: "Certificado Negociación", fecha: "03 de Septiembre de 2024", institucion: "Santander OpenAcademy | ESADE", enlace: "assets/img/Certificates/Certificado de negociacion.pdf" },
    { titulo: "Certificado Copilot", fecha: "02 de Septiembre de 2024", institucion: "Santander OpenAcademy", enlace: "assets/img/Certificates/Certificado de Copilot.pdf" },
    { titulo: "Constancia Ciberseguridad en el Trabajo", fecha: "01 de Septiembre de 2024", institucion: "AcademiaRed", enlace: "https://academia.redporlaciberseguridad.org/pluginfile.php/1/tool_certificate/issues/1725164882/9329565504KS.pdf" },
    { titulo: "Constancia Aspectos básicos de Azure AI (IA-900)", fecha: "31 de Agosto de 2024", institucion: "AcademiaRed", enlace: "https://academia.redporlaciberseguridad.org/pluginfile.php/1/tool_certificate/issues/1725082838/6413950937KS.pdf" },
    { titulo: "Certificado Google: Inteligencia Artificial y productividad", fecha: "27 de Agosto de 2024", institucion: "Santander OpenAcademy | Google", enlace: "assets/img/Certificates/Certificado de Google Inteligencia Artificial y productividad.pdf" },
    { titulo: "Constancia Estrés Laboral", fecha: "13 de Agosto de 2024", institucion: "AcademiaRed", enlace: "https://academia.redporlaciberseguridad.org/pluginfile.php/1/tool_certificate/issues/1723581196/0931253244KS.pdf" },
    { titulo: "Constancia Inteligencia Artificial en el Trabajo", fecha: "13 de Agosto de 2024", institucion: "AcademiaRed", enlace: "https://academia.redporlaciberseguridad.org/pluginfile.php/1/tool_certificate/issues/1723577113/7375529237KS.pdf" },
    { titulo: "Introduction to Front-End Development", fecha: "24 de Julio de 2024", institucion: "META | Coursera", enlace: "https://coursera.org/share/496a8ca264e9e9c4488ed520a528bfe3" },
    { titulo: "Certificado Web Development", fecha: "27 de Junio de 2024", institucion: "Sololearn", enlace: "https://www.sololearn.com/certificates/CC-JKR7LD8F" },
    { titulo: "Certificado Introduction to HTML", fecha: "26 de Junio de 2024", institucion: "Sololearn", enlace: "https://www.sololearn.com/certificates/CC-TJITAMZS" },
    { titulo: "Insignia Introducción al desarrollo web: HTML y CSS (2/2)", fecha: "26 de Junio de 2024", institucion: "Google SkillShop", enlace: "https://skillshop.exceedlms.com/student/award/DZE25BMpWmz27DxC2cS9Xd1H" },
    { titulo: "Insignia Introducción al desarrollo web: HTML y CSS (1/2)", fecha: "26 de Junio de 2024", institucion: "Google SkillShop", enlace: "https://skillshop.exceedlms.com/student/award/uAG55eNWpi9E3GBsfGNpdPgv" },
    { titulo: "Certificado de inglés", fecha: "19 de Enero de 2024", institucion: "Instituto Tecnológico Superior de Juan Rodriguez Clara", enlace: "assets/img/Certificates/Certificado de ingles.pdf" },
  ];

  let certPage = 1;
  const certPerPage = 5;

  function renderCertificados() {
    const container = document.getElementById("certificados-container");
    container.innerHTML = "";
    const start = (certPage - 1) * certPerPage;
    const end = start + certPerPage;
    const pageItems = certificados.slice(start, end);

    pageItems.forEach(cert => {
      container.innerHTML += `
        <div class="resume-item">
          <h4>${cert.titulo}</h4>
          <h5>${cert.fecha}</h5>
          <p><em>${cert.institucion}</em></p>
          <a href="${cert.enlace}" target="_blank" rel="noopener noreferrer">Ver certificado aquí</a>
        </div>
      `;
    });

    renderCertPagination();
  }

  function renderCertPagination() {
    const totalPages = Math.ceil(certificados.length / certPerPage);
    const pagination = document.getElementById("certificados-pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      pagination.innerHTML += `
        <li class="page-item ${i === certPage ? "active" : ""}">
          <a class="page-link" href="#">${i}</a>
        </li>
      `;
    }

    [...pagination.querySelectorAll("a")].forEach((a, index) => {
      a.addEventListener("click", e => {
        e.preventDefault();
        certPage = index + 1;
        renderCertificados();
      });
    });
  }

  // ========================= EXPERIENCIA =========================
  const experiencias = [
    { puesto: "Profesional Informático", fecha: "Marzo 2025 - Julio 2025", empresa: "Organismo Público Local Electoral del Estado de Veracruz", tareas: ["Soporte técnico presencial y remoto en 7 Consejos Municipales", "Instalación y configuración de equipos, impresoras y redes LAN", "Implementación de cableado estructurado y conectividad de hasta 15 dispositivos", "Coordinación de simulacros y pruebas operativas de sistemas electorales", "Diagnóstico y mantenimiento correctivo de equipos e impresoras", "Inventario tecnológico y reportes de incidencias (hardware, software e Internet)", "Capacitación a +80 usuarios en sistemas SEPAPP, SICOM y herramientas de captura", "Coordinación de turnos y asignaciones de capturistas y auxiliares", "Instalación de CCTV y detectores de humo en bodegas electorales", "Mantenimiento preventivo y respaldo de información crítica en 7 Consejos"] },
    { puesto: "Soporte Técnico de TI", fecha: "Agosto 2024 - Diciembre 2024", empresa: "DSBJ México", tareas: ["Soporte técnico a todos los departamentos", "Mantenimiento de equipos", "Configuración de impresoras ZEBRA", "Inventario de equipos", "Automatización de Excel con macros", "Instalación de software y formateo", "Backup en SQL Server"] },
    { puesto: "Técnico de computadoras", fecha: "Mayo 2023 - Junio 2024", empresa: "TECNOS KRK", tareas: ["Instalación de software", "Mantenimiento de equipos", "Formateo", "Instalación de Office", "Optimización de sistemas", "Cursos de computación"] },
    { puesto: "Empleado de piso", fecha: "Diciembre 2023 - Diciembre 2023", empresa: "MILANO, Cosamaloapan", tareas: ["Atención al cliente", "Orden y limpieza de la tienda", "Inventario"] }
  ];

  let expPage = 1;
  const expPerPage = 3;

  function renderExperiencia() {
    const container = document.getElementById("experiencia-container");
    container.innerHTML = "";
    const start = (expPage - 1) * expPerPage;
    const end = start + expPerPage;
    const pageItems = experiencias.slice(start, end);

    pageItems.forEach(exp => {
      container.innerHTML += `
        <div class="resume-item">
          <h4>${exp.puesto}</h4>
          <h5>${exp.fecha}</h5>
          <p><em>${exp.empresa}</em></p>
          <ul>${exp.tareas.map(t => `<li>${t}</li>`).join("")}</ul>
        </div>
      `;
    });

    renderExpPagination();
  }

  function renderExpPagination() {
    const totalPages = Math.ceil(experiencias.length / expPerPage);
    const pagination = document.getElementById("experiencia-pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      pagination.innerHTML += `
        <li class="page-item ${i === expPage ? "active" : ""}">
          <a class="page-link" href="#">${i}</a>
        </li>
      `;
    }

    [...pagination.querySelectorAll("a")].forEach((a, index) => {
      a.addEventListener("click", e => {
        e.preventDefault();
        expPage = index + 1;
        renderExperiencia();
      });
    });
  }

  // Inicializar
  renderCertificados();
  renderExperiencia();




// ========================= PORTAFOLIO =========================

  document.addEventListener("DOMContentLoaded", () => {
  // Proyectos en array
const projects = [
  {
    title: "Proyecto 1",
    description: "Diagnóstico de enfermedades para mascotas",
    category: "filter-aplicaciones filter-interactivas filter-paginas",
    image: "img_portafolio/Animal-Cosver/1.PNG",
    gallery: "portfolio-gallery-app",
    link: "https://github.com/Kevin-Sayago312/Animal-Cosver",
    lightboxTitle: "Este proyecto consistió en el desarrollo y diseño de una aplicación web de un sistema experto. El objetivo era crear una aplicación web que mencione qué enfermedad tiene una máscota en base a los sintomas que el cliente haya seleccionado, y que el cliente pueda crear una cuenta, iniciar sesión y guardar el tratamiento que el sistema experto le haya mostrado. Utilizamos tecnologías modernas para garantizar una experiencia de usuario óptima y un diseño adaptativo que se ve bien en todos los dispositivos. Fecha del proyecto: 4 Junio, 2024"
  },
  {
    title: "Proyecto 2",
    description: "Página avanzada",
    category: "filter-paginas",
    image: "img_portafolio/ASSE-MKT/1.PNG",
    gallery: "portfolio-gallery-product",
    link: "https://asse-mkt.web.app/",
    lightboxTitle: "Este proyecto consistió en el desarrollo y diseño de un sitio web personalizado para ASSE-MKT, una empresa especializada en marketing digital. El objetivo era crear una plataforma atractiva y funcional que les permitiera mostrar sus servicios y proyectos de manera efectiva. Utilizamos tecnologías modernas para garantizar una experiencia de usuario óptima y un diseño adaptativo que se ve bien en todos los dispositivos. El sitio incluye secciones detalladas sobre los servicios ofrecidos y casos de exito. Fecha del proyecto: 08 de Julio, 2024"
  },
  {
    title: "Proyecto 3",
    description: "Conversor",
    category: "filter-interactivas filter-aplicaciones",
    image: "img_portafolio/Conversor/3.1.PNG",
    gallery: "portfolio-gallery-branding",
    link: "https://conversor-sistema-medicion.netlify.app/",
    lightboxTitle: "Este proyecto consistió en el desarrollo y diseño de una aplicación web de conversor de medidas. El objetivo era crear una aplicación web interactiva que haga conversiones de medidas tales como: Longitud, Velocidad, Voluen y Temperatura. Fecha del proyecto: 15 de Septiembre, 2023"
  },
  {
    title: "Proyecto 4",
    description: "E-commerce EMPMEX-ADA",
    category: "filter-aplicaciones filter-paginas",
    image: "img_portafolio/EMPMEX-ADA/1.PNG",
    gallery: "portfolio-gallery-book",
    link: "https://proyectovera.netlify.app/",
    lightboxTitle: "Este proyecto consistió en el desarrollo y diseño de una aplicación web para un E-commerce para la venta de popotes biodegradables. El objetivo era crear una aplicación web interactiva, intuitiva y facil de utilizar para el usuario. Utilizamos tecnologías modernas para garantizar una experiencia de usuario óptima y un diseño adaptativo que se ve bien en todos los dispositivos. Fecha del proyecto: 26 de Mayo, 2024"
  },
  {
    title: "Proyecto 5",
    description: "Página básica",
    category: "filter-paginas",
    image: "img_portafolio/Freelancer-TECNOSKRK/2.1.PNG",
    gallery: "portfolio-gallery-app",
    link: "https://freelancer-tecnos-krk.netlify.app/",
    lightboxTitle: "Este proyecto consistió en el desarrollo y diseño de un sitio web de 3 páginas web. El objetivo era crear un sitio web informativo acerca de alguna empresa o negocio, con 3 páginas web: 1.- La principal, con informmación del negocio, 2.- Contacto, donde el cliente puede contactar al negocio, 3.- Acerca de, quién es la empresa o negocio. Fecha del proyecto: 25 de Noviembre, 2024"
  },
  {
    title: "Proyecto 6",
    description: "Página básica",
    category: "filter-paginas filter-aplicaciones",
    image: "img_portafolio/Freelancer/1.1.PNG",
    gallery: "portfolio-gallery-product",
    link: "https://freelancer-kevin-sayago.netlify.app/",
    lightboxTitle: "Este proyecto consistió en el desarrollo y diseño de una página web freelancer. El objetivo era crear una página web informativa acerca de una persona o freelancer que tenga servicios. Fecha del proyecto: 17 Febrero, 2023"
  },
  {
    title: "Proyecto 7",
    description: "E-commerce para una panadería",
    category: "filter-aplicaciones filter-paginas",
    image: "img_portafolio/PanaderiaLoma/3.1.PNG",
    gallery: "portfolio-gallery-branding",
    link: "https://github.com/Kevin-Sayago312/PanaderiaLoma",
    lightboxTitle: "Este proyecto consistió en el desarrollo y diseño de una aplicación web para un E-commerce para una panadería. El objetivo era crear una aplicación web para un E-commerce de una panadería. Utilizamos tecnologías modernas para garantizar una experiencia de usuario óptima y un diseño adaptativo que se ve bien en todos los dispositivos. Fecha del proyecto: 16 Junio, 2024"
  },
  {
    title: "Proyecto 8",
    description: "E-commerce para tienda electrónica",
    category: "filter-aplicaciones",
    image: "img_portafolio/TiendaKRK/2.1.PNG",
    gallery: "portfolio-gallery-book",
    link: "https://github.com/Kevin-Sayago312/Tienda-Online-TECNOS-KRK",
    lightboxTitle: "Este proyecto consistió en el desarrollo y diseño de una aplicación web para un E-commerce de tecnología. El objetivo era crear una aplicación web para un E-commerce de una tienda de articulos electrónicos. Utilizamos tecnologías modernas para garantizar una experiencia de usuario óptima y un diseño adaptativo que se ve bien en todos los dispositivos. Fecha del proyecto: 2 Noviembre, 2023"
  },
  {
    title: "Proyecto 9",
    description: "Tutorial",
    category: "filter-paginas",
    image: "img_portafolio/Tutorial_Materia_Sistemas_Operativos/4.1.PNG",
    gallery: "portfolio-gallery-app",
    link: "https://tutorial-sistemas-operativos.netlify.app/",
    lightboxTitle: "Este proyecto consistió en el desarrollo y diseño de un sitio web con contenido informativo de la materia de Sistemas Operativos de la carrera de Ing. En Sistemas Computacionales. El objetivo era crear un sitio web donde un usuario pueda ver toda la información acerca de la materia, las temas y subtemas que se ven, entre otras cosas más. Fecha del proyecto: 10 de Diciembre, 2024"
  },
  {
    title: "Proyecto 10",
    description: "Landing Page - Portafolio",
    category: "filter-landings",
    image: "img_portafolio/Portafolio/1.PNG",
    gallery: "portfolio-gallery-portafolio",
    link: "https://portafolio-kevin-sayago-rosales.netlify.app/",
    lightboxTitle: "Este proyecto consistió en el desarrollo y diseño de una Landing page de un portafolio. El objetivo era crear una landing page atractiva y funcional que le permita mostrar los servicios y proyectos de manera efectiva y breve a los usuarios. Utilizamos tecnologías modernas para garantizar una experiencia de usuario óptima y un diseño adaptativo que se ve bien en todos los dispositivos. Fecha del proyecto: 29 Julio, 2024"
  }
];

  // Render dinámico
  const container = document.getElementById("portfolio-container");
  projects.forEach((project) => {
    const projectHTML = `
      <div class="col-lg-4 col-md-6 portfolio-item isotope-item ${project.category}">
        <div class="portfolio-content h-100">
          <img src="${project.image}" class="img-fluid" alt="${project.title}">
          <div class="portfolio-info">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <a href="${project.image}" title="${project.lightboxTitle}" data-gallery="${project.gallery}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="${project.link}" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", projectHTML);
  });

  // Inicializar Glightbox
  GLightbox({ selector: ".glightbox" });

  // Inicializar Isotope
  const iso = new Isotope(".isotope-container", {
    itemSelector: ".isotope-item",
    layoutMode: "masonry"
  });

  // Filtros
  const filters = document.querySelectorAll(".portfolio-filters li");
  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      filters.forEach(f => f.classList.remove("filter-active"));
      this.classList.add("filter-active");
      iso.arrange({ filter: this.getAttribute("data-filter") });
    });
  });

  // Recalcular layout al cargar imágenes
  window.addEventListener("load", () => {
    iso.layout();
  });
});
