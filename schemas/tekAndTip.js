export default {
  name: 'tekAndTip',
  title: 'Tek & Tip',
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
      name: 'difficulty_level',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner', value: 'beginner'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'}
        ]
      }
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
      difficulty: 'difficulty_level',
      media: 'image'
    },
    prepare(selection) {
      const {title, difficulty, media} = selection
      return {
        title: title,
        subtitle: difficulty ? `Difficulty: ${difficulty}` : '',
        media: media
      }
    }
  }
}