"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const ProductForm = () => {
  return (
    <form>
        <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required/>
        </div>
    </form>
  )
}

export default ProductForm