export function ComponentWrapper({ children, name, className }) {
  return (
    <div className={`rounded-lg border p-4 ${className ?? ""}`}>
      <h3 className="mb-2 text-sm font-medium">{name}</h3>
      <div>{children}</div>
    </div>
  )
}
