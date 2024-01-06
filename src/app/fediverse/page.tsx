import AddPost from "@/components/Home/AddPost/AddPost";
import BackLink from "@/components/global/BackLink";
import Card from "@/components/global/Card";
import Post from "@/components/post/Post";


export default function localPage() {
  return (
    <div className="space-y-5">
        <Card className="shadow">
            <BackLink title='Fediverse timeline ' />
        </Card>
        <AddPost />
        <Post shadow/>
        <Post shadow/>
        <Post shadow/>
        <Post shadow/>
        <Post shadow/>
        <Post shadow/>
        <Post shadow/>
        <Post shadow/>
        <Post shadow/>
        <Post shadow/>
        <Post shadow/>
    </div>
  )
}
