---
title: Shooting Boards
reference_name: shooting-boards
reference_parent: tools
boards:
- board:
  instructor: Daughters Wood Co (Mike Pekovich design)
  video: https://www.youtube.com/watch?v=Mtvpk0g3aDs
  building-plans:
  type: End/Edge
  fence: Adjustable, Removable
  outer-fence:
- board:
  instructor: James Wright
  video: https://www.youtube.com/watch?v=W7xD9fmbcdo
  building-plans:
  type: End/Edge
  fence: Fixed
  outer-fence:
- board:
  instructor: Jonathan Katz-Moses
  video: https://www.youtube.com/watch?v=YnYczLJscYw
  building-plans: https://kmtools.com/collections/plans/products/simple-shooting-board-plans
  type: End/Edge
  fence: Fixed, Removable
  outer-fence: 
- board:
  instructor: Lie-Nielsen
  video: https://www.lie-nielsen.com/pages/downloads
  building-plans: https://d3h1zj156zzd4j.cloudfront.net/pdf/LNT-shooting-board-2019.pdf
  type: End
  fence: Fixed
  outer-fence: Adjustable
- board:
  instructor: Lie-Nielsen
  video: https://www.lie-nielsen.com/pages/downloads
  building-plans: https://d3h1zj156zzd4j.cloudfront.net/pdf/LNT-shooting-board-2019.pdf
  type: Edge
  fence: Fixed
  outer-fence: Adjustable
- board:
  instructor: Lie-Nielsen
  video: https://www.lie-nielsen.com/pages/downloads
  building-plans: https://d3h1zj156zzd4j.cloudfront.net/pdf/LNT-shooting-board-2019.pdf
  type: Miter
  fence: Fixed
  outer-fence: Adjustable
- board:
  instructor: Paul Sellers
  video: https://www.youtube.com/watch?v=-Ypbvcxb-8M
  building-plans: http://www.popularwoodworking.com/wp-content/uploads/2010/11/ShootingBoard2.pdf
  type: End/Edge/Miter
  fence: Fixed, Removable
  outer-fence: 
- board:
  instructor: Rex Krueger
  video: https://www.youtube.com/watch?v=JbpwDufvzSo
  building-plans: https://www.rexkrueger.com/store/advanced-shooting-board
  type: End/Edge
  fence: Adjustable
  outer-fence: 
- board:
  instructor: Rex Krueger
  video: https://www.youtube.com/watch?v=3odXnkR2N7s
  building-plans: https://www.rexkrueger.com/store/classic-shooting-board
  type: End/Edge
  fence: Fixed
  outer-fence: 
- board:
  instructor: Rob Cosman
  video: https://www.youtube.com/watch?v=YyfvygylyJg
  building-plans: 
  type: End/Edge
  fence: Fixed
  outer-fence: 
- board:
  instructor: Rob Cosman
  video: https://www.youtube.com/watch?v=IVrKjjjZ50M
  building-plans: 
  type: End/Edge for Block Plane
  fence: Fixed
  outer-fence: 
- board:
  instructor: The English Woodworker
  video: https://www.youtube.com/watch?v=lW8mVIA63Co
  building-plans: https://www.theenglishwoodworker.com/wp-content/uploads/2022/02/The-Shooting-Board.pdf
  type: End/Edge
  fence: Fixed, Removable
  outer-fence: 
---
<h2>Beginner Level Shooting Boards</h2>

<table>
    <thead>
        <tr>
            <th>Instructor</th>
            <th>Video</th>
            <th>Building plans</th>
            <th>Type</th>
            <th>Fence</th>
            <th>Outer fence</th>
        </tr>
    </thead>
    <tbody>
        {% for item in page.boards %}
        <tr>
            <td>{{item.instructor}}</td>
            <td><a href="{{item.video}}">Video</a></td>
            <td><a href="{{item.building-plans}}">Plans</a></td>
            <td>{{item.type}}</td>
            <td>{{item.fence}}</td>
            <td>{{item.outer-fence}}</td>
        </tr>
        {% endfor %}
    </tbody>
</table>