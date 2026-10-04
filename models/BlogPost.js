const mongoose = require('mongoose');
const { Schema } = mongoose;

// Public blog post — rendered server-side at /blog/:slug (routes/blog.js) and
// managed from Admin → Blog (routes/adminBlog.js). Only status 'published'
// posts are ever served publicly or listed in /sitemap.xml; drafts 404.
//
// bodyMarkdown is stored raw and rendered + sanitized on every request
// (utils/blogRender.js), so the sanitizer rules apply to old posts too.
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const BlogPostSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true, maxlength: 120, match: SLUG_RE },
    title: { type: String, required: true, trim: true, maxlength: 200 },
    metaDescription: { type: String, trim: true, maxlength: 155, default: '' },
    excerpt: { type: String, trim: true, maxlength: 500, default: '' },
    bodyMarkdown: { type: String, default: '' },
    coverImageUrl: { type: String, trim: true, maxlength: 1000, default: null }, // https://… or /path only
    tags: { type: [String], default: [] },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },
    publishedAt: { type: Date, default: null },  // set on first publish, kept on unpublish/republish
    author: { type: String, trim: true, maxlength: 120, default: 'Kejuiana Johnson, MA, LPC, NCC' },
  },
  { timestamps: true } // createdAt + updatedAt
);

BlogPostSchema.index({ status: 1, publishedAt: -1 });

BlogPostSchema.statics.SLUG_RE = SLUG_RE;

module.exports = mongoose.model('BlogPost', BlogPostSchema);
