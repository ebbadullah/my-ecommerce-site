export default function BestSellers() {
    const sellers = [
      {
        name: "Robert",
        purchases: "755 Purchases",
        image: "/placeholder.svg?height=40&width=40",
        category: "Kitchen, Pets",
        total: "$1,000",
        status: 100,
        statusColor: "bg-green-500",
      },
      {
        name: "Calvin",
        purchases: "483 Purchases",
        image: "/placeholder.svg?height=40&width=40",
        category: "Health, Grocery",
        total: "$4,200",
        status: 65,
        statusColor: "bg-red-500",
      },
      {
        name: "Dwight",
        purchases: "789 Purchases",
        image: "/placeholder.svg?height=40&width=40",
        category: "Electronics",
        total: "$2,700",
        status: 85,
        statusColor: "bg-gray-300",
      },
      {
        name: "Cody",
        purchases: "345 Purchases",
        image: "/placeholder.svg?height=40&width=40",
        category: "Movies, Music",
        total: "$2,100",
        status: 75,
        statusColor: "bg-green-500",
      },
      {
        name: "Bruce",
        purchases: "545 Purchases",
        image: "/placeholder.svg?height=40&width=40",
        category: "Sports, Fitness",
        total: "$4,400",
        status: 45,
        statusColor: "bg-yellow-500",
      },
      {
        name: "Jorge",
        purchases: "678 Purchases",
        image: "/placeholder.svg?height=40&width=40",
        category: "Toys, Baby",
        total: "$4,750",
        status: 90,
        statusColor: "bg-green-500",
      },
      {
        name: "Kristin Watson",
        purchases: "234 Purchases",
        image: "/placeholder.svg?height=40&width=40",
        category: "Gift Cards",
        total: "$1,000",
        status: 55,
        statusColor: "bg-purple-500",
      },
    ]
  
    return (
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Best Shop Sellers</h2>
          <button className="text-sm text-gray-500">View all →</button>
        </div>
  
        <div className="space-y-4">
          {sellers.map((seller) => (
            <div key={seller.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={seller.image || "/placeholder.svg"}
                  alt={seller.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-medium">{seller.name}</h3>
                  <p className="text-xs text-gray-500">{seller.purchases}</p>
                </div>
              </div>
  
              <div className="flex-1 mx-8">
                <div className="text-sm text-gray-500 mb-1">{seller.category}</div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full ${seller.statusColor}`} style={{ width: `${seller.status}%` }} />
                </div>
              </div>
  
              <div className="text-sm font-medium">{seller.total}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  