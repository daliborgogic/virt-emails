const { doctype } = require('./doctype')
const separator = (height = 16, color = '#e0e0e0') =>
  `<tr><td height="${height}"></td></tr>
   <tr><td height="${height}" style="border-top: 1px solid ${color};"></td></tr>`
const space = x => `<tr><td height="${x}"></td></tr>`
const label = x => `<tr><td style="font-size: 12px; color: #999;">${x}</td></tr>`
const input = x => `<tr><td style="font-size: 16px; text-decoration: none; color: #000000;">${x}</td></tr>`
const check = (a, b) => { return a ? label(b) + input(a) + separator() : '' }

const body = async data => {
  const {
    title,
    office,
    department,
    firstName,
    lastName,
    email,
    phone,
    resumeWrite,
    letterWrite,
    linkedin,
    website,
    question
  } = data

  return `<table class="table" width="400" border="0" cellpadding="0" cellspacing="0" align="center">
    ${label('Position')}
    <tr><td style="font-size: 32px; font-weight: bold;">${title}</td></tr>

    ${
      space(64) +
      label('Office') +
      input(office) +
      separator() +
      label('Department') +
      input(department) +
      separator() +
      label('First Name') +
      input(firstName) +
      separator() +
      label('Last Name') +
      input(lastName) +
      separator() +
      label('Email') +
      input(email) +
      separator()  +
      check(phone, 'Phone') +
      check(resumeWrite, 'Resume/CV') +
      check(letterWrite, 'Cover Letter') +
      check(linkedin, 'Linkedin Profile') +
      check(website, 'Website') +
      check(question, 'Question') +
      space(64)
    }

    <tr>
      <td style="font-size: 12px; color: #999999;">
        <b>NAME</b><br>
        Short description<br>
        Street<br>
        City, Address
      </td>
    </tr>

    ${space(64)}
  </table>`
}

module.exports.test = async data => {
  const { title } = data
  const injectBody = await body(data)
  const html = await doctype(title, injectBody)

  return html
}
