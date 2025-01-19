import CardProvider from './card-provider'

export default function HistoryServicesProvider() {
  return (
    <div className="w-full mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <CardProvider />
      <CardProvider />
      <CardProvider />
      <CardProvider />
      <CardProvider />
      <CardProvider />
    </div>
  )
}
