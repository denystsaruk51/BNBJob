import Configs from './Config'

export function GetRecruiterCategories() {
  const URL = Configs.domain + Configs.apiBaseUrl + '/recruiterCategories'
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
export function GetProfessionalFields(token) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/job_category_groups?token=' + token;
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
export function GetProfessionalSubFields(token, groupId) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/job_category_groups/' + groupId + '/job_categories';
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

export function SetProfessionalField (token, fieldId, subFieldId) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/users/job_category';
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
      job_category_id: subFieldId,
      job_category_group_id: fieldId,
    }),
  }).then((res) => res.json());
}

export function GetCandidateCount() {
  const URL = Configs.domain + Configs.apiBaseUrl + '/users/candidate_count';
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
export function GetJobCount() {
  const URL = Configs.domain + Configs.apiBaseUrl + '/offers/count';
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
export function GetUsers(token) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/users?token=' + token;
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
export function GetInvites(token) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/friends/invite?token=' + token;
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
export function SetUserFriend (token, userId) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/friends/' + userId + '/invite';
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
    }),
  }).then((res) => res.json());
}
export function SetInviteAccept (token, userId) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/friends/' + userId + '/accept';
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
    }),
  }).then((res) => res.json());
}
export function SetInviteDecline (token, userId) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/friends/' + userId + '/decline';
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
    }),
  }).then((res) => res.json());
}
export function SetUserUnFriend (token, userId) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/friends/' + userId + '/unfriend';
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
    }),
  }).then((res) => res.json());
}

export function GetChats(token) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/chats?token=' + token;
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

export function PublishNewGroup (token, title, description, latitude, longitude, activity_type, number_of_participants, start_time, end_time) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/groups';
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
      title,
      description,
      latitude,
      longitude,
      activity_type,
      number_of_participants,
      start_time,
      end_time,
    }),
  }).then((res) => res.json());
}
export function GetParticipateGroups(token) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/groups/filter_params?token=' + token + '&is_participant=true';
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
export function GetCreatedGroups(token) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/groups/filter_params?token=' + token + '&is_participant=false';
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
export function GetMessages(token, user_id) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/chats/' + user_id + '/messages?token=' + token;
  return fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}
export function PostMessage(token, user_id, message) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/chats/' + user_id + '/messages';
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
      message: message
    }),
  }).then((res) => res.json());
}
export function PostFileMessage(token, user_id, uri, name, type) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/chats/' + user_id + '/messages';
  const file = {
    uri,             // e.g. 'file:///path/to/file/image123.jpg'
    name,            // e.g. 'image123.jpg',
    type             // e.g. 'image/jpg'
  } 
  const data = new FormData();
  data.append('msgType', 'F');
  data.append('token', token);
  data.append('file', file);
  data.append('messageText', '');
  
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    body: data
  }).then((res) => res.json());
}

export function PostMessageToGroup(token, group_id, message) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/chats/' + group_id + '/group_messages';
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
      message: message
    }),
  }).then((res) => res.json());
}
export function UpdateMessageStatus(token, message_id) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/chats/messages/' + message_id + '/update';
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
    }),
  }).then((res) => res.json());
}

export function UpdateMessageToRead(token, chatroom_id) {
  const URL = Configs.domain + Configs.apiBaseUrl + '/chats/' + chatroom_id + '/readMsg';
  return fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
    }),
  }).then((res) => res.json());
}