insert Quote {
  content := <str>$content,
  character := (
    select Character
    filter .id = <optional uuid>$character
  ),
}
