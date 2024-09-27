export const useUrls = (text: string) => {
  const URLRegex = new RegExp(
    /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/,
  )

  const returnableText = (text: string) => {
    return `<a target="_blank" class="text-[var(--brand-blue)]" href="${text}">${text}</a>`
  }

  try {
    return text.replace(URLRegex, returnableText)
  } catch {
    return text ?? "undefined"
  }
}

export const useUnorderedList = (text: string) => {
  if (text.startsWith("- ")) {
    return "<li>" + text.replace("- ", "") + "</li>"
  }
  return text
}

export const useFormatting = (text: string) => {
  let finalText = useUrls(text)
  finalText = useUnorderedList(finalText)
  return finalText
}
