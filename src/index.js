import { test } from './apply.js'
const data = {
  title: 'Senior Analyst',
  department: 'Analytics',
  office: 'Brooklyn, NY',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  resumeWrite: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam velit, ipsum voluptatem, omnis commodi quibusdam rerum provident nam fuga animi impedit laboriosam earum atque illum laudantium cumque temporibus placeat natus labore sapiente officia similique quia quam dolorum. Similique enim sint quibusdam aperiam, dolores deserunt cupiditate minima ullam quis assumenda.',
  letterWrite: 'Lorem ipsum dolor sit amet, Similique enim sint quibusdam aperiam, dolores deserunt cupiditate minima ullam quis assumenda.',
  phone: '0615814110',
  linkedin: 'https://linkedin.com',
  website: 'https://example.com',
  question: 'Answer'
}

test(data).then(x => document.body.innerHTML = x )
