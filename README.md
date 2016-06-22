

## Step 3

- The list of wines
- the selected region
- the filtered list of wines (based on the selected region)
- the selected wine 
- the list of regions (derived from the original list of wines)

Is it passed in from a parent via props? If so, it probably isn't state.

Does it change over time? If not, it probably isn't state.
- The original list of wines does not change over time => not state
- the selected region changes over time => state
- the filtered list of wines changes over time => state
- the selected wine changes over time => state

Can you compute it based on any other state or props in your component? If so, it's not state.
- the list of regions can be derived from the original list of wines => not state

http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes

