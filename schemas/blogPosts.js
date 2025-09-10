export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'brief_description',
      title: 'Brief Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(200)
    },
    {
      name: 'full_content_body',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'published_at',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}