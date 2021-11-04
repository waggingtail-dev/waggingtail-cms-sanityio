export default {
  name: 'setting',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'key',
      title: 'Key',
      type: 'string',
    },
    {
      name: 'value',
      title: 'Value',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'key',
    }
  },
}
