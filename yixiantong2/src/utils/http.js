data = {
  id: 1,
  text: 'test'
}

qs.stringify(data);

id=1&text=test

qs.parse('id=1&text=test')