import Configs from './Config';

export function testAPI () {
  const URL = Configs.domain + Configs.apiBaseUrl + '/test';
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
}
export function SignUpUser (email, password, phoneRegion, phoneNumber, firstName, lastName, isCandidate, recruiterType, siret, institutionName) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/signup';
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      phone_region: phoneRegion,
      phone_number: phoneNumber,
      is_candidate: isCandidate,
      first_name: firstName,
      last_name: lastName,
      verification_code: '1234',
      recruiter_type: recruiterType,
      siret_number: siret,
      institution_name: institutionName
    }),
  }).then((res) => res.json());
}

export function SignInUser (email, password) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/signin';
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => res.json());
}