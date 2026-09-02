---
title: "{{ replace .File.ContentBaseName "-" " " }}"
date: {{ .Date }}
draft: true
---

Work you did here. When this page is ready:

1. Set `draft: false`
2. Add `url = "/experience/{{ .File.ContentBaseName }}/"` to that job in `hugo.toml`
