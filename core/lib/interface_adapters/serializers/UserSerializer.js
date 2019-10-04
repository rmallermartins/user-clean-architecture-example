const _serializeSingleUser = (user) => {
  return {
    'id': user.id,
    'name': user.name,
    'email': user.email,
  };
};

export class UserSerializer {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to not be undefined or null');
    }

    if (Array.isArray(data)) {
      return data.map(_serializeSingleUser);
    }
    return _serializeSingleUser(data);
  }
}
