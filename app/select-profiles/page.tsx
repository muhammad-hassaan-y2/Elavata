import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 space-y-6">
      <h2 className="text-3xl font-bold">Select your role</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="space-y-4">
          <Card className="bg-primary rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-white">
              <CardTitle className="text-3xl font-bold">Teacher</CardTitle>
              <CardDescription className="text-lg text-white">
                Select this role if you are an educator looking to manage your
                classroom.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Link
                href="/admin"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-primary shadow-md transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Select Teacher
              </Link>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <Card className="bg-primary rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader className="text-white">
              <CardTitle className="text-3xl font-bold">Student</CardTitle>
              <CardDescription className="text-lg text-white">
                Select this role if you are a student looking to access your
                classroom materials.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Link
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-primary shadow-md transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Select Student
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
