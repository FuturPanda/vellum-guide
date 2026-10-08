---
title: Tasks and Projects
description: What the Tasks and Projects links in the rail open, what makes a tag a task tag, and how to point either link at another tag.
version: "0.3.11"
referencedBy:
  - title: Guides
    href: /guides/
  - title: FAQ
    href: /faq#tasks-and-projects
---

# Tasks and Projects

In the Vellum rail there are two special links: **Tasks** and **Projects**. Tasks opens your `#task` page. Projects opens your `#project` page.

Both of those can be pointed at other tags if you wish.

If you like the Vellum default, where Tasks opens your `#task` page and Projects opens your `#project` page, then you can skip the rest of this page.

But if you want to change what Tasks and Projects link to, then read on. We'll start with understanding Planning.

## Why the Planning section matters

Planning is what makes notes with a tag behave like stuff-to-do. It is where you tell Vellum which of the tag's fields hold the **When** and the **Due date**. That's what puts a note into the Today's tasks section at the top of your daily note, and gives it a date chip that turns red once it slips past.

The Planning section appears on a tag's Schema tab once the tag has a date field. A date field can play either part:

- a date field can be the **When**: the day you want to work on something. When can also hold the word Anytime or Someday instead of a day.
- a date field can be the **Due date**: the day it's due.

Planning also shows up on a tag that your task tag points at, even when that tag has no fields at all. More on that in the Projects section below.

## Changing what Tasks opens

By default, clicking Tasks in the rail opens your `#task` page. To point it at a different tag, that tag needs a When or a Due date set up in its Planning section.

To make that happen, two steps:

1. On the tag's Schema tab, add a date field.
2. In the Planning section, choose that field as the tag's **When field** or **Due date field**.

Step 2 is the one that counts. Adding a date field does nothing on its own. Naming it as the When field or the Due date field is what tells Vellum that notes with this tag are stuff-to-do with a date.

The moment one of those is set, the Planning section shows one more line, like this:

> The Tasks link in the rail opens #task
>
> **Make Tasks open this tag**

Click the button and Tasks will open this tag from then on. The line changes to *The Tasks link in the rail opens this tag*, so you can always see where it points.

The Tasks link can only point to one tag at a time. If you change your mind, go to the tag you want and point it there instead.

You can have more than one task tag, each with its own fields and statuses. Notes wearing any of them can show up in Today's tasks. The Tasks link just opens one of them.

## Changing what Projects opens

The Projects link works a bit differently.

You never mark a tag as your "projects tag" directly. A tag becomes one when a task tag points at it. Once a task tag has a When field or Due date field set, its Planning section also has a **Belongs to** setting, which picks one of the tag's reference fields. Out of the box, `#task` belongs to `#project` through its Project field.

So changing what the Projects link points to is a two-stepper:

1. On `#task`, add a reference field pointed at the tag you want, then set **Belongs to** to that field.
2. Go to that tag. Its Planning section now offers **Make Projects open this tag**. Click it.

Heads up on step 1: Belongs to does more than feed the rail. It's how each task knows what it belongs to, and that's the label you see next to every task in the Today's tasks list on your today note. Change Belongs to to a new field and those labels now come from the new field. If you're truly moving your projects to a different tag, that's exactly what you want. Just know the labels move with it.

The **Make Projects open this tag** button itself does only one thing: it picks which page the Projects link opens.

## Can both Tasks and Projects point at the same tag?

You can, but the rail will only show Tasks.

## Tasks that come round again

For tasks that repeat, from setting one up to fixing a day recorded wrong, see [Repeating tasks](/guides/repeating-tasks).

## A project's tasks, wherever you wrote them

To gather a project's open tasks from the project itself, your daily notes and anything linking to it, all on the project's own page, see [Note hierarchy and Note links](/guides/note-hierarchy).

<ReferencedBy />
