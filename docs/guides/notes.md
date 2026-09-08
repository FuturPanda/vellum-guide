---
title: Notes guide
description: Learn how to use aliases and merge tags or fields in Vellum.
version: "0.2.8"
referencedBy:
  - title: Guides
    href: /guides/
  - title: Changelog · Vellum 0.2.8
    href: /changelog#v0.2.8
---

# Notes guide

## Merge tags and fields

You can merge tags and fields without any pre-staging. Visit any tag or field and choose either **Merge other tags [fields] into this one** or **Merge this tag [field] into…**.

Before you confirm, the merge dialog describes everything that will be updated.

## Aliases

Aliases let you refer to a note by other names. Open a note and choose **cmd-k > Show info** to add them. This info panel is new and will expand over time; for now, it contains aliases and a few other details.

Search, **cmd-p**, `[[`, `@`, and even `#` for a tag find notes by either their original names or any aliases.

A single link can also show its own words. Write `[[Vellum|my favourite note app]]`, or place the cursor next to an existing link and choose **cmd-k > Change the words**.

If you changed a link’s words and want that name to stick, choose **cmd-k > This Link > Promote** to turn it into a real alias. The **This Link** section of **cmd-k** contains a few other helpful options too.

Aliases are included in Markdown imports and exports.

<ReferencedBy />
