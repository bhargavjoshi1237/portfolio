import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentWrapper } from "./ComponentWrapper"
import { Calendar } from "@/components/ui/calendar"
import { LineChart } from "@/components/ui/line-chart"
import { Switch } from "@/components/ui/switch"
import { Avatar } from "@/components/ui/avatar"

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {/* Revenue Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$15,231.89</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          <LineChart className="h-[50px] w-full mt-4" />
        </CardContent>
      </Card>

      {/* Subscriptions Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          <div className="mt-4 flex gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-[50px] w-3 bg-primary rounded-full opacity-70" />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Calendar Card */}
      <Card>
        <CardContent className="p-0">
          <Calendar />
        </CardContent>
      </Card>

      {/* Team Members Section */}
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle className="text-sm font-medium">Team Members</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {["Sofia Davis", "Jackson Lee", "Isabella Nguyen"].map((name) => (
            <div key={name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar />
                <div>
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-xs text-muted-foreground">m@example.com</p>
                </div>
              </div>
              <Switch />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Exercise Minutes Chart */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle className="text-sm font-medium">Exercise Minutes</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart className="h-[200px] w-full" />
        </CardContent>
      </Card>
    </div>
  )
}
