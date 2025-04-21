// const uriFront = `https://academiafortaleza.com.uy`
// const uriFront = `https://fortaleza-dos.vercel.app`
// const uriFront = `http://localhost:${PORT.front}`   // http://localhost:3000

const PORT = {
  back: 8080,   // Puerto backend
  front: 3000,  // Puerto frontend
}

const uriFront = `https%3A%2F%2Facademiafortaleza.com.uy`

const uriViewPdf = `https://drive.google.com/viewerng/viewer?embedded=true&url=${uriFront}`

const URI_FRONT = {
  homeUri: `/`,
  sesionAlumnosUri: `/sesion-alumno`,
}


///

const URL_PDF = {
  protocoloActuacion: `${uriViewPdf}/static/doc/protocolo-de-actuacion-examenes-practicos-academia-fortaleza.pdf`,
  teoricoAcademia: `${uriViewPdf}/static/doc/teorico_Academia_Fortaleza.pdf`,
  senalesReglamentarias: `${uriViewPdf}/static/doc/senales_reglamentarias.pdf`,
  institucionesMedicas: `${uriViewPdf}/static/doc/instituciones_medicas_habilitadas.pdf`,
  requisitos: `${uriViewPdf}/static/doc/requisitos-para-obtener-licencia-de-conducir.pdf`,
  estacionarSeguro: `${uriViewPdf}/static/doc/estacionar_de_forma_segura.pdf`,
  factoresRiesgo: `${uriViewPdf}/static/doc/factores_riesgo.pdf`,
  glosario: `${uriViewPdf}/static/doc/GLOSARIO.pdf`,
  senalesAnexo: `${uriViewPdf}/static/doc/senales_anexo.pdf`,
}


///

const T_ROL = {
  ADMIN: `A`,
  ESTUDIANTE: `E`,
  FUNCIONARIO: `F`,
  INVITADO: `I`,
};

const PARAMETERS = {
  redirecturi: `redirectUri`,
  clientid: `clientId`,
  code: `code`,
  clientsecret: ``,
  tokenBearer: `QzIwMUtFRDA6ZmI0ZDkxYmEtNWQ2OC00NjIwLWExZWEtNzhhNjYzZTI1OTRl`,
  apiRest: `https://us-west-2.data.tidbcloud.com/api/v1beta/app/dataapp-aRNsJSkL/endpoint/getRanking`
};

const redirigir = (url) => {
  window.location.href = url;
};

export { URI_FRONT, URL_PDF, T_ROL, PARAMETERS, redirigir };